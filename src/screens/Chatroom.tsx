import * as React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import ChatRoomItem from '../components/common/ChatRoomItem'
import tokens from '../styles/tokens'
import { EvilIcons, Feather } from '@expo/vector-icons'
import { AnimationContext } from '../contexts/AnimatedContext'
import { useSelector } from 'react-redux'
import Swipeable from '../components/common/Swipeable'

export default function Home() {
  const sessionState = useSelector((state) => state.sessions)
  const { animationValue } = React.useContext(AnimationContext)
  const [data, setData] = React.useState([])

  React.useLayoutEffect(() => {
    setData(sessionState.sessions)
  }, [sessionState])

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header />}
        data={data}
        renderItem={({ item }) => (
          <Swipeable>
            <ChatRoomItem chatRoom={item} />
          </Swipeable>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: animationValue },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      />
    </View>
  )
}

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: tokens.colorGray300,
        borderBottomWidth: 1,
      }}
    >
      <Text
        style={{
          flex: 1,
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize: 40,
          paddingBottom: 10,
          shadowOpacity: 0.2,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 2,
          },
        }}
      >
        Chats
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: tokens.colorCoolGray100,
          borderRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: 'center',
        }}
      >
        <EvilIcons name="search" size={24} color={tokens.colorGray400} />
        <TextInput
          placeholder="Search"
          style={{
            paddingHorizontal: 5,
            flex: 1,
            fontSize: 16,
            color: '#333333',
          }}
        />
        <TouchableOpacity>
          <Feather name="filter" size={24} color={tokens.colorSky600} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: tokens.colorBaseWhite,
    flex: 1,
  },
})
