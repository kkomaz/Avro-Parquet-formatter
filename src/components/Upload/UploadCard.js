/** @jsx jsx */
import { useState } from 'react'
import _ from 'lodash'
import { css, jsx } from '@emotion/core'
import {
  Button,
  Card,
  Icon,
  Upload,
} from 'antd'
import colors from 'utils/colors'
import openNotificationWithIcon from 'utils/openNotificationWithIcon'

const { Dragger } = Upload;

function UploadCard() {
  const [files, setFiles] = useState([])

  const replaceFile = (f) => {
    if (!_.isEmpty(files)) {
      removeFile()
    }

    setFiles([f])
  }

  const removeFile = () => {
    setFiles([])
  }

  const compile = () => {
    openNotificationWithIcon('success', 'Success!', 'Successfully compiled')
  }

  return (
    <Card
      title="Avro/Parquet Upload"
      css={css`
        height: 100vh;
        position: relative;
      `}
      headStyle={{
        color: colors.white,
        background: colors.primary
      }}
    >
      <div
        css={css`
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          text-align: center;
        `}
      >
        <Dragger
          name="file"
          customRequest={data => (
            setTimeout(() => {
              data.onSuccess('ok')
            }, 0)
          )}
          beforeUpload={replaceFile}
          onRemove={removeFile}
          multiple={false}
          fileList={files}
        >
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag files to zip your files</p>
          <p className="ant-upload-hint">
            Upload support for .avro and .parquet files
          </p>
        </Dragger>
        <Button
          onClick={compile}
          css={css`
            margin-top: 2em;
          `}
          type="primary"
          size="large"
          shape="round"
          disabled={_.isEmpty(files)}
        >
          Compile
        </Button>
      </div>
    </Card>
  )
}

export default UploadCard
