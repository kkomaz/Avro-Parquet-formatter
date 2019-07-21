/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'
import {
  Layout,
  Menu,
  Row,
} from 'antd';
import Container from 'components/Common/Container'

const {
  Header,
} = Layout

function Navbar(props) {
  const openDonate = () => {
    const win = window.open('https://www.buymeacoffee.com/heNcCO458', '_blank'); /* eslint-disable-line */
    win.focus();
  }

  return (
    <Header
      css={theme => css`
        padding: 0;
        margin-bottom: 2em;

        .ant-menu-item {
          color: ${theme.colors.white};

          &:hover {
            color: white;
          }
        }
      `}
      className="header"
    >
      <Container>
        <Menu
          theme="light"
          css={theme => css`
            border-bottom: none;
            display: flex;
            justify-content: flex-start;
            position: relative;

            .ant-menu-item {
              border-bottom: none;
            }
          `}
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item
            key="1"
            css={css`
              font-size: 16px;
              font-weight: 800;
            `}
          >
            <span
              css={theme => css`
                color: ${theme.colors.darkness};
              `}
            >
              {`{ `}
            </span>
            <span>
              Avro | Parquet formatter
            </span>
            <span
              css={theme => css`
                color: ${theme.colors.darkness};
              `}
            >
              {` }`}
            </span>
          </Menu.Item>
          <Menu.Item
            onClick={openDonate}
            key="2"
            css={css`
              font-size: 16px;
              font-weight: 800;
              position: absolute !important;
              right: 0;
            `}
          >
            Donate
          </Menu.Item>
        </Menu>
      </Container>
    </Header>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  userSession: PropTypes.object.isRequired,
}

export default Navbar
