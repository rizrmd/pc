import { FC } from "react";
import { Spring } from "react-spring";

export const Animate: FC<{
  from: () => any;
  to: () => any;
  config: () => any;
  finished: () => Promise<any>;
  child: any;
  PassProp: any;
}> = ({ config, from, to, child, PassProp, finished }) => {
  const conf = config();
  return (
    <Spring
      config={conf}
      delay={conf.delay ? conf.delay : undefined}
      from={from()}
      to={to()}
      onRest={finished}
    >
      {(animate) => <PassProp animate={animate}>{child}</PassProp>}
    </Spring>
  );
};
