import { useRequest } from 'ahooks';
import { Button, message } from 'antd';

import { getError, getLoading } from './api';

const App = () => {
  const { run: runLoading } = useRequest(getLoading, {
    manual: true,
    onSuccess(data) {
      message.success(JSON.stringify(data));
    },
  });

  const { run: runError } = useRequest(getError, { manual: true });

  return (
    <>
      <div>
        <h1 className="text-center py-40 text-5xl">
          Hello Antd & Tailwind CSS
        </h1>
      </div>
      <div className="flex justify-center gap-10">
        <Button type="primary" onClick={runLoading}>
          Loading Request
        </Button>
        <Button onClick={runError}>Error Request</Button>
      </div>
    </>
  );
};

export default App;
