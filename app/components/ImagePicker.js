import React, { useState } from "react"
import { View, Button, Alert, Image  } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { store } from "../firebase/FirebaseConfig"


export default function ImagePickerComponent(props){
  const [image, SetImage] = useState(null)
  const [uploading, SetUploading] = useState(false)

  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1,1],
        quality: 1
      })

      const source = {uri: result.assets[0].uri.toString()}
      console.log(source)
      SetImage(source)
  }

  const uploadingImage = async () => {
    SetUploading(true)
    const response = await fetch(image.uri)
    const blob = await response.blob()
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
    const ImageRef = ref(store, filename);
    

    try {
      // 'file' comes from the Blob or File API
      await uploadBytes(ImageRef, filename).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    } catch (e){
        console.log(e)
    }
    SetUploading(false)
    Alert.alert("Photo uploaded !!!")
    SetImage(null)
  }

  return (
    <View style={[{flexDirection:'row', justifyContent:'space-between'}, props.style]}>
      <Button title="Choisir une image" onPress={pickImage} />
      {/*image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />*/}
      <Button title="Upload image" onPress={uploadingImage} />
    </View>
  );
}




