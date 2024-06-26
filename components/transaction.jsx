import {View,Image, Text} from "react-native"
import { themes } from "../themes";
import { useState } from "react";


const page = ({icon,title,desc,amount}) => {
    const [theme,setTheme] = useState(themes.light)

    return (
        <View style={{width:"100%",flexDirection:"row",marginVertical:"7px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
    
            <View style={{width:"max",flexDirection:"row",marginVertical:"7px", display:"flex", alignItems:"center",gap:"6px"}}>
                <View style={{padding:"15px", backgroundColor:theme.tintBg, borderRadius:"100%"}}>
                  <Image source={icon}/>
                </View>

                <View style={{display:"flex",flexDirection:"column", gap:"3px",marginLeft:"7px"}}>
                    <Text style={{fontSize:"16px",fontWeight:"500",color:theme.textColor}}>{title}</Text>
                    <Text style={{color:theme.tint}}>{desc}</Text>
                </View>
            </View>

            <View>
                <Text style={{fontSize:"16px",fontWeight:"400"}}>{amount}</Text>
            </View>
        </View>
    )
}

export default page