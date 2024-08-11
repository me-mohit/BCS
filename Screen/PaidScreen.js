import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function PaidScreen() {
    const Data = [
      
        {
            Coin: 'Bit',
            enteryprice: "",
            target: 1,
            target2: 2,
            stoploss: '',
            date: '10/02/2004',
            leverage: 10,
            isbuy: true,
            Free: false
        },
      
     
        {
            Coin: 'Bit',
            enteryprice: "",
            target: 1,
            target2: 2,
            stoploss: '',
            date: '10/02/2004',
            leverage: 10,
            isbuy: false,
            Free: false
        },
      

    ]
    return (
        <FlatList
            data={Data}
            renderItem={({ item }) => {
                return (

                    <View style={{ backgroundColor: item.isbuy ? '#E3FFA2' : '#FF9770', margin: 10, padding: 10, borderRadius: 20, }} >
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }} >
                            <View style={{ flexDirection: 'row', gap: 10 }} >

                                <Text style={{ color: 'black', fontSize: 20 }} >
                                    {item.Coin}
                                </Text>
                                <Text style={{ color: 'black', fontSize: 20, }} >
                                    Leverage :*{item.leverage}
                                </Text>
                            </View>

                            <Text style={{ backgroundColor: item.isbuy ? 'green' : 'red', fontSize: 20, color: 'black', padding: 10, borderRadius: 10 }} >
                                {item.isbuy ? 'Buy' : 'Sell'}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15 }} >
                                Target 1 : {item.target}
                            </Text>
                            <Text style={{ color: 'black', fontSize: 15 }} >
                                Target 2 :  {item.target2}
                            </Text>
                            <Text style={{ color: 'black', fontSize: 15 }} >
                                stoploss 2 :  {item.stoploss}
                            </Text>
                            <Text style={{ color: 'black', fontSize: 15 }} >
                                Date: {item.date}
                            </Text>
                        </View>

                    </View>

                )
            }}
        />

    )
}
