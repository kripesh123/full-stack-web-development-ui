import React, { Children } from 'react';
import PropTypes from 'prop-types';

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
        alignContentSpaceAround,
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

            <style jsx>{`
                div {
                    display : flex;
                    flex-flow: row;
                    flex-wrap: wrap;
                    
                    ${ flexFlowColumn ? 'flex-flow: cloumn;' : ''}

                    ${ flexFlowRowReverse ? 'flex-flow: row-reverse;' : ''}
                    ${ flexFlowColumnReverse ? 'flex-flow: column-reverse;' : ''}

                    ${ noFlexWrap ? 'flex-flow: nowrap;' : ''}
                    ${ flexWrapReverse ? 'flex-flow: wrap-reverse;' : ''}

                    ${ justifyRight ? 'justify-content: flex-end;' : ''}
                    ${ justifyLeft ? 'justify-content: flex-start;' : ''}
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
                    ${ alignContentSpaceAround ? 'align-content: space-around;' : ''}
                    ${ alignContentSpaceBetween ? 'align-content: space-between;' : ''}
                    ${ alignContentStretch ? 'align-content: stretch;' : ''}

                    ${ gutter ? 'margin-left: -1em;' : 'margin-left: 0;'}
                }
            `}</style>
        </div>
    )
}

Grid.proTypes = {
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
    alignContentSpaceAround: PropTypes.bool,
    alignContentStretch: PropTypes.bool,
    gutter: PropTypes.bool
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
    alignStretch: false,

    alignContentLeft: false,
    alignContentRight: false,
    alignContentCenter: false,
    alignContentSpaceAround: false,
    alignContentSpaceBetween: false,
    alignContentStretch: false,

    gutter: false
}

export default Grid