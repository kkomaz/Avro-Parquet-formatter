/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  Col,
  Row,
} from 'antd'
import UploadCard from 'components/Upload/UploadCard'

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={11} offset={1}>
          <UploadCard />
        </Col>
        <Col span={11} offset={1}>
          Output
        </Col>
      </Row>
    </div>
  );
}

export default App;
