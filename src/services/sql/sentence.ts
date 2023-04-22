export const DROPMESSAGE = 'DROP TABLE IF EXISTS "message";'
export const DROPSESSION = 'DROP TABLE IF EXISTS "session";'
export const DROPCUSTOMER = 'DROP TABLE IF EXISTS "customer";'
export const DROPAGENT = 'DROP TABLE IF EXISTS "agent";'

export const AGENT = `
CREATE TABLE "agent" (
	"agentID"	TEXT NOT NULL UNIQUE,
	"username"	TEXT NOT NULL,
	"avatar"	TEXT,
	PRIMARY KEY("agentID")
	);`

export const CUSTOMER = `
	CREATE TABLE "customer" (
		"customerID"	TEXT NOT NULL UNIQUE,
		"name"			TEXT NOT NULL,
		"state"			INTEGER NOT NULL DEFAULT 0 CHECK(state IN (0,1)),
		PRIMARY KEY("customerID")
	);`

export const SESSION = `
CREATE TABLE "session" (
	"sessionID"		TEXT NOT NULL UNIQUE,
	"customerID"	TEXT NOT NULL,
	"agentID"		TEXT,
	"channel"		TEXT,
	"sessionState"	TEXT,
	FOREIGN KEY("customerID") REFERENCES "customer"("customerID"),
	PRIMARY KEY("sessionID")
);`

export const MESSAGE = `
CREATE TABLE "message" (
	"messageID"		TEXT NOT NULL UNIQUE,
	"sessionID"		TEXT,
	"customerID"	TEXT NOT NULL,
	"senderID"		TEXT NOT NULL,
	"text"			TEXT NOT NULL,
	"datetime"		TEXT NOT NULL,
	"messageState"	TEXT,
	FOREIGN KEY("customerID") REFERENCES "customer"("customerID"),
	FOREIGN KEY("sessionID") REFERENCES "session"("sessionID"),
	PRIMARY KEY("messageID")
);`

// NOTE GET SENTENCE

export const GETCUSTOMERS = 'SELECT * FROM customer'

export const GETCHATROOMS = `
SELECT customer.customerID, name, text as lastMessage, datetime, messageState, sessionState FROM customer 
LEFT JOIN (SELECT * FROM session WHERE ROWID IN (SELECT MAX(ROWID) FROM session GROUP BY customerID)) USING (customerID) 
LEFT JOIN (SELECT * FROM message WHERE ROWID IN (SELECT MAX(ROWID) FROM message GROUP BY customerID)) USING (customerID)
WHERE customer.state = 0;`

export const GETSESSIONS = `
SELECT * FROM customer 
LEFT JOIN (SELECT * FROM session WHERE ROWID IN (SELECT MAX(ROWID) FROM session GROUP BY customerID)) USING (customerID) 
LEFT JOIN (SELECT * FROM message WHERE ROWID IN (SELECT MAX(ROWID) FROM message GROUP BY customerID)) USING (customerID,  sessionID)
LEFT JOIN agent USING (agentID);
`
export const GETMESSAGES = `SELECT messageID, sessionID, message.customerID, text, datetime, messageState, senderID,
CASE WHEN name IS NULL THEN username ELSE name END name, avatar FROM message 
LEFT JOIN customer ON customer.customerID = message.senderID 
LEFT JOIN agent ON agent.agentID = message.senderID 
WHERE message.customerID = ? ORDER BY message.ROWID DESC LIMIT ?;`

export const GET_ALL_MESSAGES = 'SELECT * FROM message'

// NOTE ADD SENTENCE

export const ADDAGENT = `
INSERT INTO agent (agentID, name, avatar) 
SELECT ?, ?, ? WHERE NOT EXISTS (SELECT 1 FROM agent WHERE agentID = ?);
`
export const ADDCUSTOMER = `
INSERT INTO customer (customerID, name) 
SELECT ?, ? WHERE NOT EXISTS (SELECT 1 FROM customer WHERE customerID = ?);
`
export const ADDSESSION = `
INSERT INTO session (sessionID,customerID, agentID, channel, sessionState) 
SELECT ?, ?, ?, ?, ? WHERE NOT EXISTS (SELECT 1 FROM session WHERE sessionID = ?);
`
export const ADDMESSAGE = `
INSERT INTO message (messageID,sessionID,customerID,senderID,text,datetime,messageState)
SELECT ?,?,?,?,?,?,? WHERE NOT EXISTS (SELECT 1 FROM message WHERE messageID = ?);
`
// NOTE UPDATE SENTENCE

export const UPDATECHATROOM =
  'UPDATE customer SET state = ? WHERE customerID = ?;'

export const UPDATESESSIONSTATE =
  'UPDATE session SET sessionState = ? WHERE sessionID = ?;'

// NOTE DELETE SENTENCE

export const DELETESESSION = 'DELETE FROM session WHERE sessionID = ?;'
