import React from "react";

class MiComponente extends React.Component {
  handleClick = () => {
    const script = document.createElement("script");
    script.src = "https://bryandofus3229.activehosted.com/f/embed.php?id=9";
    script.type = "text/javascript";
    script.charset = "utf-8";
    document.body.appendChild(script);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Abrir Formulario</button>
      </div>
    );
  }
}

export default MiComponente;
