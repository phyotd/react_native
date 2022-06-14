import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateName } from '../../store/reducers/main'

const ContactScreen = () => {
    const {appNm} = useSelector(state=>state.main)
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const updateData =()=>{
        dispatch(updateName(name))
    }
  return (
    <View>
      <Text style={{fontSize:32}}>{appNm}</Text>
      <TextInput style={{borderColor:"#333",borderWidth:1}} value={name} onChangeText={(text)=>setName(text)} placeholder="enter app name" />
       <Button title='updateData' onPress={()=>updateData()} />
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})