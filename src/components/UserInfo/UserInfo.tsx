import { Col, Row, Statistic, Descriptions } from 'antd';
import { useSelector } from 'react-redux';
import type { RootState } from "../../app/Redux/store";


const UserInfo = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Row>
        <Col span={12}>
          <Descriptions title="Дані користувача">
            <Descriptions.Item label="Ім'я">{user.name}</Descriptions.Item>
            <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          </Descriptions>
        </Col>

      </Row>
      <Row style={{ margin: '16px 0' }}>
        <Col span={12}>
          <Descriptions title="Статистика">
            <Descriptions.Item><Statistic title="Створено списків" value={2} /></Descriptions.Item>
            <Descriptions.Item><Statistic title="Поставлено оцінок" value={12} /></Descriptions.Item>
            <Descriptions.Item><Statistic title="Середня оцінка" value={4.5} /></Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  )
}


export default UserInfo;