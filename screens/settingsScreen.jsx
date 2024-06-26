import {View,Text,Image,TouchableOpacity} from "react-native"
import React, { useState } from 'react';
import { themes } from "../themes";

const page = () => {
    const settings = [
        {title:"Language",
        href:"#"},
        {title:"My Profile",
        href:"#"},
        {title:"Contact Us",
        href:"#"},
        {title:"Change Password",
        href:"#"},
        {title:"Privacy Policy",
        href:"#"},
    ]

    const [theme,setTheme] = useState(themes.light)

    const toggleTheme = () => {
        setTheme(theme == themes.light ? themes.dark : themes.light)
    }

    return (
        <View style={{flex:1,backgroundColor:theme.backgroundColor, fontFamily:"helvetica", padding:"10px"}}>
            <center style={{fontSize:"25px", fontWeight:"500", marginVertical:"23px",marginTop:"20px",color:theme.textColor}}>Settings</center>

            <View style={{marginVertical:"20px"}}>
                 {
                    settings.map((set) => (
                        <View style={{display:"flex",padding:"15px 10px",  marginTop:"10px", flexDirection:"row", justifyContent:"space-between", alignItems:"center", borderBottomWidth:2, borderBottomColor:"#f5f5f5"}}>
                            <Text style={{fontSize:"20px",marginLeft:"8px", fontWeight:"bold" , color:theme.textColor}}>{set.title}</Text>
                            <Image source={theme == themes.light ? require("../assets/right.png") : require("../assets/arrowDark.png")} style={{width:20,marginRight:"8px"}}/>
                        </View>
                    ))
                 }
            </View>

            <View style={{marginVertical:"20px",display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
                 <Text style={{fontSize:"24px", fontWeight:"bold", color:theme.textColor}}>Theme</Text>

                 <TouchableOpacity onPress={toggleTheme}>
                    <Image source={theme == themes.light ? require("../assets/lightToggler.png") : require("../assets/darkToggler.png")} style={{width:"70px",height:"40px"}}/>
                 </TouchableOpacity>
            </View>
        </View>
    )
}

export default page