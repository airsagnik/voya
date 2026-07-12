import type { CSSProperties } from 'react';
import classes from './PhotoGridLayout.module.css';
import FlippableImage from './FlippableImage';
function PhotoGridLayout({alignItems,isReverse,justifyContent}: {justifyContent: CSSProperties['justifyContent'],alignItems: CSSProperties['alignItems'],isReverse:boolean})
{
    let widthHeightArr = [[100,120],[90,110],[80,100],[70,90]];
    if(isReverse)
    {
        widthHeightArr = widthHeightArr.toReversed();
    }

    return <div className={classes.photoGridContainer} style={{alignItems:alignItems,justifyContent:justifyContent}}>
        <FlippableImage width={widthHeightArr[0][0]} height={widthHeightArr[0][1]} url={'http://images.unsplash.com/photo-1570097703229-b195d6dd291f?q=80&w=344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <FlippableImage width={widthHeightArr[1][0]} height={widthHeightArr[1][1]} url={'http://images.unsplash.com/photo-1570097703229-b195d6dd291f?q=80&w=344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <FlippableImage width={widthHeightArr[2][0]} height={widthHeightArr[2][1]} url={'http://images.unsplash.com/photo-1570097703229-b195d6dd291f?q=80&w=344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <FlippableImage width={widthHeightArr[3][0]} height={widthHeightArr[3][1]} url={'http://images.unsplash.com/photo-1570097703229-b195d6dd291f?q=80&w=344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
    </div>
}

export default PhotoGridLayout;