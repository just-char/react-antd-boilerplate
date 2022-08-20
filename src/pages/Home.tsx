import { CloseCircleOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Button, message } from 'antd';

import { getError, getLoading } from '@/api';

const HomePage = () => {
  const { refetch: fetchLoading } = useQuery(['loading'], getLoading, {
    enabled: false,
    onSuccess(data) {
      message.success(JSON.stringify(data));
    },
  });
  const { refetch: fetchError } = useQuery(['error'], getError, {
    enabled: false,
  });

  return (
    <div className="flex justify-center gap-10">
      <Button type="primary" onClick={() => fetchLoading()}>
        Loading Request
      </Button>
      <Button onClick={() => fetchError()} icon={<CloseCircleOutlined />}>
        Error Request
      </Button>
    </div>
  );
};

export default HomePage;
