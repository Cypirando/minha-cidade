import { Layout, Space } from "antd";
import Headers from "../components/Headers";

const Page: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Headers />
    </Layout>
  </Space>
);

export default Page;
