const Paginator = ({ dataLength, activeIndex }) => {
  let dots = [];
  let classes = "";
  for (let index = 0; index < dataLength; index++) {
    classes = activeIndex === index ? "dot active" : "dot";
    dots.push(<div key={index} className={classes}></div>);
  }
  console.log({ dots });
  return (
    <div className="paginator">
      <div className="hr"></div>
      {dots.map((dot) => dot)}
    </div>
  );
};

export default Paginator;
