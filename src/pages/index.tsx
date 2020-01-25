import * as React from "react"
import { Link, graphql } from "gatsby"
import { IndexHogeQuery } from "../../types/graphql-types"
import PrimaryButton from "../components/atoms/Button/primary"
// ______________________________________________________
//
type Props = {
  data: IndexHogeQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = () => {
  return (
    <div>
      aaa
      <PrimaryButton>bbb</PrimaryButton>
    </div>
  )
}
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// ______________________________________________________
//
export default Component
