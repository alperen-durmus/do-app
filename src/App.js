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
import { ClearOutlined } from "@ant-design/icons";

const fetch = require('node-fetch');

function App() {
  const { segment, microphoneState, stop} = useSpeechContext()

  const [text, setText] = useState()
  const [sentence, setSentence] = useState()
  const [translationActive, setTranslationActive] = useState(false);

  useEffect(() => {
    if (segment) {
      const plainString = segment.words.filter(w => w.value).map(w => w.value).join(' ');
      setSentence(plainString);
      if(segment.isFinal) {
        setText((text ? text : "") + " " + sentence)
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
          <TextArea rows={10} value={text} id="text" onChange={(value) => setText(value.target.value)}/>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop:20}}>
        <Col>
          <Button onClick={() => setTranslationActive(true)} size="large" className="button">Translate</Button>
        </Col>
        <Col offset={2}></Col>
        <Col>
          <Button onClick={() => {
              setTranslationActive(false)
              setText("")
            }} size="large" className="button" icon={<ClearOutlined />}>Clear</Button>
        </Col>
      </Row>
      
      {translationActive && <Translation text={text} />}

      <BigTranscript placement="bottom"/>
      <PushToTalkButton placement="bottom" captureKey="" powerOn="auto" silenceToHangupTime=" "/>
      <IntroPopup />
    </div>
  );
}

export default App;
