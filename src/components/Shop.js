import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useSelector } from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch();
    // const actions = bindActionCreators(actionCreators, dispatch);
    // using destructuring to get the functions of our dispatch
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
    const balance = useSelector(state => state.amount);
  return (
    <div className='container'>
        <h2>Deposit / Withdraw Money</h2>
        {/* general - onClick={()=>{(dispatch(actionCreators.withdrawMoney(100)))}} */}
        <button className="btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update Balance : ({balance})
        <button className="btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop