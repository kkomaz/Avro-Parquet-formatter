/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Col,
  Row,
} from 'antd'
import UploadCard from 'components/Upload/UploadCard'
import Markdown from 'components/Output/Markdown'
import Output from 'container/Output'

function App() {
  return (
    <div className="App">
      <Output.Provider>
      <Row>
        <Col span={11} offset={1}>
          <UploadCard />
        </Col>
        <Col span={11} offset={1}>
          <Markdown />
        </Col>
      </Row>
      </Output.Provider>
    </div>
  );
}

export default App;
