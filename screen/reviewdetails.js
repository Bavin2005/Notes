import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Review(navigation){
    return(
        <View style = {styles.container}>
             <Text>React</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 24,
    }
})