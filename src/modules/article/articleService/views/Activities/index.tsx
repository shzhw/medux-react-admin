import ImgAD from './imgs/ad.png';
import Logo1 from './imgs/logo1.png';
import Logo2 from './imgs/logo2.png';
import Logo3 from './imgs/logo3.png';
import Logo4 from './imgs/logo4.png';
import React from 'react';
import styles from './index.m.less';

interface StoreProps {}

class Component extends React.PureComponent<StoreProps> {
  public render() {
    return (
      <section className={`${styles.root} g-doc`} id="articleHome_Activities">
        <h2>售后服务</h2>
        <article>
          <p>
            “土地征收问题的核心在于补偿。”10月27日，在第八届在鸣行政法治论坛上，多位学者聚焦新土地管理法动向，围绕“土地征收中的公共利益”和“征收新程序与土地利益分配”等议题展开探讨，有学者指出，政府因公共利益征地时，如果不解决补偿问题，土地征收问题就不可能有效解决。
          </p>

          <p>
            上述论坛由北京在明律师事务所和《法律与生活》杂志社联合主办。澎湃新闻（www.thepaper.cn）注意到，今年8月26日，十三届全国人大常委会第十二次会议表决通过了关于修改土地管理法的决定，并于2020年1月1日起施行新法。
          </p>

          <p>“补偿问题不解决，土地征收问题不可能有效解决”</p>

          <p>
            有关征地补偿问题引发学界关注。澎湃新闻观察到，新土地管理法第四十五条首次针对土地征收的公共利益作出界定，明确了因军事和外交、政府组织实施的基础设施建设、公益事业、扶贫搬迁和保障性安居工程以及成片开发建设等六种情况确需要征地的，可以依法实施征收。
          </p>
          <p>
            韩俊指出，乡村社会的治理要采取符合农村特点的方式，既要充分运用现代的治理理念和方式，也要充分发挥农村传统治理资源的作用，采取村规民约来推进乡风文明建设。村规民约是村民自我管理、自我教育、自我监督的行为规范，介于法律和道德之间，更多的是发挥道德的约束作用。
          </p>

          <p>韩俊指出，一些地方村规民约的内容还是比较空泛，制定也不够规范，实施也存在流于形式的问题。特别是有一些村规民约的内容涉嫌违法违规，对亲情伦理缺乏关怀，容易伤害群众的感情。</p>
        </article>
      </section>
    );
  }
}

export default Component;