import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Text,


} from 'react-native'




function Home() {
    const [data, setData] = useState([{ name: "C'est moi" }])

    useEffect(() => {
        fetch('http://192.168.43.219/job/candidates/', { method: "GET" })

            .then(response => response.json())

            .then(response =>
                setData((response instanceof Array) ? response : [response])
            )

            .catch(error => console.error(error))

    }, [])


    const renderData = (item) => {

        return (
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontSize: 25 }}>
                    {item.name}
                </Text>
                <Text>
                    {item.password}
                </Text>
                {/* <a href={item.cv}>CV</a> */}

            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderData(item)
                }}
                keyExtractor={item => item.id}
            />

        </View>

    )
}


const styles = StyleSheet.create({

})

export default Home
