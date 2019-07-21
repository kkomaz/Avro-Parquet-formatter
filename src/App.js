/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Col,
  Row,
} from 'antd'
import UploadCard from 'components/Upload/UploadCard'
import Markdown from 'components/Output/Markdown'
import Output from 'container/Output'
import Navbar from 'components/Navbar/Navbar'
import Container from 'components/Common/Container'

function App() {
  return (
    <div className="App">
      <Output.Provider>
        <Navbar />
        <Container>
          <Row gutter={32}>
            <Col span={12}>
              <UploadCard />
            </Col>
            <Col span={12}>
              <Markdown />
            </Col>
          </Row>
        </Container>
      </Output.Provider>
    </div>
  );
}

export default App;
