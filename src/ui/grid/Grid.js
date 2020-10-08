// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const Grid = (props) => {
  const {
    children,

    flexFlowColumn,
    flexFlowRowReverse,
    flexFlowColumnReverse,
    noFlexWrap,
    flexWrapReverse,

    justifyRight,
    justifyCenter,
    justifyLeft,
    justifySpaceAround,
    justifySpaceBetween,

    alignTop,
    alignBottom,
    alignCenter,
    alignStretch,
    alignBaseline,

    alignContentLeft,
    alignContentRight,
    alignContentCenter,
    alignContentSpaceBetween,
    alignSContentSpaceAround,
    alignContentStretch,

    gutter,
    ...others
  } = props

  const GridCells = React.Children.map(children, (GridCell) => {
    if (!GridCell) {
      return null
    }
    if (GridCell.props) {
      return React.cloneElement(GridCell, { gutter })
    }
    return GridCell
  })

  return (
    <div {...others}>
      {GridCells}

      {/* language=CSS */}
      <style jsx>{`
        div {
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;

          ${ flexFlowColumn ? 'flex-flow: column;' : ''}

          ${ flexFlowRowReverse ? 'flex-flow: row-reverse;' : ''}
          ${ flexFlowColumnReverse ? 'flex-flow: column-reverse;' : ''}

          ${ noFlexWrap ? 'flex-wrap: nowrap' : ''}
          ${ flexWrapReverse ? 'flex-wrap: wrap-reverse' : ''}

          ${ justifyLeft ? 'justify-content: flex-start;' : ''}
          ${ justifyRight ? 'justify-content: flex-end;' : ''}
          ${ justifyCenter ? 'justify-content: center;' : ''}
          ${ justifySpaceAround ? 'justify-content: space-around;' : ''}
          ${ justifySpaceBetween ? 'justify-content: space-between;' : ''}

          ${ alignTop ? 'align-items: flex-start;' : ''}
          ${ alignBottom ? 'align-items: flex-end;' : ''}
          ${ alignCenter ? 'align-items: center;' : ''}
          ${ alignStretch ? 'align-items: stretch;' : ''}
          ${ alignBaseline ? 'align-items: baseline;' : ''}

          ${ alignContentLeft ? 'align-content: flex-start;' : ''}
          ${ alignContentRight ? 'align-content: flex-end;' : ''}
          ${ alignContentCenter ? 'align-content: center;' : ''}
          ${ alignSContentSpaceAround ? 'align-content: space-around;' : ''}
          ${ alignContentSpaceBetween ? 'align-content: space-between;' : ''}
          ${ alignContentStretch ? 'align-content: stretch;' : ''}

          ${ gutter ? 'margin-left: -1em;' : 'margin-left: 0;'}
        }
      `}</style>
    </div>
  )
}

// Component Properties
Grid.propTypes = {
  flexFlowColumn: PropTypes.bool,
  flexFlowRowReverse: PropTypes.bool,
  flexFlowColumnReverse: PropTypes.bool,
  noFlexWrap: PropTypes.bool,
  flexWrapReverse: PropTypes.bool,
  justifyLeft: PropTypes.bool,
  justifyRight: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifySpaceAround: PropTypes.bool,
  justifySpaceBetween: PropTypes.bool,
  alignTop: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignStretch: PropTypes.bool,
  alignBaseline: PropTypes.bool,
  alignContentLeft: PropTypes.bool,
  alignContentRight: PropTypes.bool,
  alignContentCenter: PropTypes.bool,
  alignContentSpaceBetween: PropTypes.bool,
  alignSContentSpaceAround: PropTypes.bool,
  alignContentStretch: PropTypes.bool,


  gutter: PropTypes.bool,
}

Grid.defaultProps = {

  flexFlowColumn: false,
  flexFlowRowReverse: false,
  flexFlowColumnReverse: false,
  noFlexWrap: false,
  flexWrapReverse: false,

  justifyLeft: false,
  justifyRight: false,
  justifyCenter: false,
  justifySpaceAround: false,
  justifySpaceBetween: false,

  alignTop: false,
  alignBottom: false,
  alignCenter: false,
  alignStretch: false,
  alignBaseline: false,

  alignContentLeft: false,
  alignContentRight: false,
  alignContentCenter: false,
  alignContentSpaceBetween: false,
  alignSContentSpaceAround: false,
  alignContentStretch: false,

  gutter: false,
}

export default Grid