import React from "react"

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
}

const Container = (props) => <div style={{ ...styles }}>{props.children}</div>

export default Container
