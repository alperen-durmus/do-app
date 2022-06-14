import React, { useEffect, useState } from "react";
import { Button, Row, Col } from 'antd';

import TextArea from "antd/lib/input/TextArea";


const keys = [
    "5e223eb6bamsh3e67e1f930affeap11c6f6jsn12b8c0f099eb",
    "91c156e00fmsh7996f72b706cb68p1635ecjsn949aec97e020",
    "4f7d012eb3msh396b0129a6a47e5p109d1ejsn13e344daa0d1",
    "3555e92f7amsh0a125ae5c98c698p15e089jsn972ee7a368b9",
    "2a448a49e2msh3f9407b760b2370p10dcb9jsnd5ced2a24943",
    "8de98a5141mshc8d4d96bebafb63p132eaejsn1342a2175866",
    "236d0a9cafmsh4d5baf3caf790fap1ca65cjsn2ab6c637ad6f",
    "54f6711ef4msh96f76849f558763p17f2f3jsn829ad50452f0",
    "70d5a3538bmsh36f5bedb6ba3482p1c57e5jsn4b5b8432e22e",
    "05d6ec3e50mshdbd9bba4d15cd0dp19a680jsn64c6429df3c0"
];

function Translation({text}) {
        const [translation, setTranslation] = useState("")
        const [order, setOrder] = useState(0)
        const [key, setKey] = useState(keys[order])

        useEffect(() => {
            const encodedParams = new URLSearchParams();
            encodedParams.append("q", text);
            encodedParams.append("target", "tr");
            encodedParams.append("source", "en");
          
            const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
          
            const options = {
              method: 'POST',
              headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              },
              body: encodedParams
            };

            fetch(url, options)
            .then(res => res.json())
            .then(json => {
                if (json.message != undefined) {
                    setOrder(order + 1);
                    setKey(keys[order])
                } else {
                    console.log(order)
                    setTranslation(json.data.translations[0].translatedText)
                }
            })
            .catch(err => console.error('error:' + err));

        }, [text, order])
      

    return (
        <Row style={{marginTop:20}} justify="center">
            <Col md={14} sm={22} xs={22}>
                <TextArea rows={10} value={translation}/>
            </Col>
        </Row>
    )
}

export default Translation;