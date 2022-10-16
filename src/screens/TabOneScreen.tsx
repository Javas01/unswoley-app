import { useState } from 'react'
import { ScrollView, StyleSheet, TextInput } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  // const [value, setValue] = useState('Useless Multiline Placeholder')
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: 25,
          width: 150,
          height: 150,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>40$</Text>
      </View>
      <Text>3 days left</Text>
      <View style={{ width: '80%', height: '40%' }}>
        <ScrollView
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            borderStyle: 'solid',
            backgroundColor: 'chartreuse'
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Player 1</Text>
            <Text>+ 20$</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Player 2</Text>
            <Text>+ 20$</Text>
          </View>
        </ScrollView>
        <ScrollView
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            borderStyle: 'solid',
            backgroundColor: 'lightcoral'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text>Player 1</Text>
            <Text>- 2 0$</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Player 2</Text>
            <Text>- 20$</Text>
          </View>
        </ScrollView>

        {/* <TextInput
          editable
          multiline
          numberOfLines={4}
          value={value}
          onChangeText={(text) => setValue(text)}
          style={{ backgroundColor: value, borderColor: '#000000', borderBottomWidth: 1 }}
        /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
