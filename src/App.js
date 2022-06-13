import React, { useEffect, useState } from "react";
import { useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  BigTranscript,
  IntroPopup,
} from "@speechly/react-ui";
import { Button, Row, Col, Image } from 'antd';


import Translation from "./components/Translation";
import TextArea from "antd/lib/input/TextArea";


const fetch = require('node-fetch');


function App() {
  const { segment, microphoneState, stop} = useSpeechContext()

  const [text, setText] = useState("")
  const [sentence, setSentence] = useState()
  const [translationActive, setTranslationActive] = useState(false);


  useEffect(() => {
    if (segment) {
      const plainString = segment.words.filter(w => w.value).map(w => w.value).join(' ');
      setSentence(plainString);

      if(segment.isFinal) {
        setText(text + " " + sentence)
      }

    }
  }, [segment]);



  return (
    <div className="App">
      <Row justify="center">
        <Col>
        <Image
          width={200}
          src="https://i.im.ge/2022/06/14/rvdVWJ.jpg"
          preview={false}
        />

        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TextArea rows={10} value={text}/>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop:20}}>
        <Col span={1}>
          <Button onClick={() => setTranslationActive(true)} size="large" className="button">Çevir</Button>
        </Col>
      </Row>
      
      {translationActive && <Translation text={text} />}

      <BigTranscript placement="bottom"/>
      <PushToTalkButton placement="bottom" captureKey="" powerOn="auto" silenceToHangupTime="2000"/>
      <IntroPopup />
    </div>
  );
}





export default App;