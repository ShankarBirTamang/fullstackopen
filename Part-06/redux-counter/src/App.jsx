import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  return (
    <div>
      <Display />
      <Button type="INCREMENT" label="+" />
      <Button type="DECREMENT" label="-" />
      <Button type="RESET" label="reset" />
    </div>
  );
};

export default App;
