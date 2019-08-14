import * as React from "react"

export const mapConfigToProps = (Component, mapper) => {
  return (props) => {
    const finalProps = mapper(props)
    return <Component {...finalProps} />
  }
}
