import {View,Text,Image, TouchableOpacity} from "react-native"
import Transaction from "../components/transaction"
import { themes } from "../themes";
import { useState } from "react";

const page = () => {
    const [theme,setTheme] = useState(themes.light)

    const filters = [
        {
            title:"Send",
            icon: require("../assets/send.png")
        },
        {
            title:"Receive",
            icon: require("../assets/recieve.png")
        },
        {
            title:"Loan",
            icon: require("../assets/loan.png")
        },
        {
            title:"Topup",
            icon: require("../assets/topUp.png")
        },
    ]

    const transactions = [
        {
            title:"Apple Store",
            desc:"Entertainment",
            icon: require("../assets/apple.png"),
            amount:"-$5.99"
        },
        {
            title:"Spotify",
            desc:"Music",
            icon: require("../assets/spotify.png"),
            amount:"-$5.99"
        },
        {
            title:"Money Transfer",
            desc:"Transaction",
            icon: require("../assets/moneyTransfer.png"),
            amount:"-$5.99"

        },
        {
            title:"Grocery",
            desc:"Grocery",
            icon: require("../assets/grocery.png"),
            amount:"-$5.99"

        },
    ]
    return (
        <View style={{flex:1,backgroundColor:theme.backgroundColor, fontFamily:"helvetica", padding:"10px"}}>

            {/* top bar */}
            <View style={{display:"flex",width:"100%", flexDirection:"row", alignItems:"center" , justifyContent:"space-between", paddingVertical:"20px"}}>
                <View style={{display:"flex", flexDirection:"row",gap:"20px" ,alignItems:"center"}}>
                    <Image source={require("../assets/profile.png")} />
                    <View>
                        <Text style={{fontSize:"12px", color:theme.tint, letterSpacing:"0.1px"}} >Welcome back,</Text>
                        <Text style={{fontSize:"20px",color:theme.textColor}}>Eric Atsu</Text>
                    </View>
                </View>

                <View style={{padding:"10px",borderRadius:"100%", backgroundColor:theme.tintBg}}>
                  <Image source={require("../assets/search.png")} style={{width:30, height:30}}/>
                </View>
            </View>

            {/*car*/}
            <Image source={require("../assets/Card.png")} style={{width:"100%", borderRadius:"10px", marginVertical:"20px"}}/>
       
            {/* filter */}
            <View style={{display:"flex",alignItems:"center",marginVertical:"5px", paddingHorizontal:"12px", flexDirection:"row", justifyContent:"space-between"}}>
                {
                    filters.map((tab) => (
                        <TouchableOpacity key={tab.title} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                         <View style={{padding:"15px", backgroundColor:theme.tintBg, borderRadius:"100%"}}>
                            <Image source={tab.icon} />
                        </View>
                         <Text style={{fontSize:"11px",marginTop:"4px",color:theme.textColor}}>{tab.title}</Text>
                        </TouchableOpacity>
                    ))
                }

            </View>

            <View style={{width:"100%",marginVertical:"6px",flexDirection:"row",marginVertical:"17px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <Text style={{fontWeight:"500", color:"#111", fontSize:"15px",color:theme.textColor}}>Transaction</Text>
                <Text style={{color:"blue", fontSize:"12px"}}>Sell All</Text>
            </View>

            {/*transaction*/}
            <View style={{marginTop:"10px"}}>
                {transactions.map(({title,desc,icon,amount}) => (
                    <Transaction title={title} desc={desc} icon={icon} amount={amount}
                    />
                ))}
            </View>
        </View>
    )
}

export default page