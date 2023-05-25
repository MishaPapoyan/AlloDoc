import React from 'react';
import money from '../../../images/money.png'
import './BalanceInfo.css'
import visa from '../../../images/visa.png'
const BalanceInfo = () => {
    return (
        <div className='ALL'>
            <div className="currentMoney">
                <div className="content_money">
                    <h2>Баланс</h2>
                    <p>1 058,68 <img src={money} alt=""/></p>
                </div>
                <button className="deposit">Пополнить счет</button>
            </div>
            <div className="historyDeposits">
                <div className="navigation">
                    <h2>История платежей</h2>
                    <span>За сегодня</span>
                    <span>За месяц</span>
                    <span>За все время</span>
                </div>
            </div>
            <div className="permutations">
                <div className="paymentSystem_img"><img src={visa} alt=""/></div>
                <div className="paymentDate">10.03.2021</div>
                <div className="purposeOfPayment">Пополнение</div>
                <div className="paymentSize">+ 560,00 <img src={money} alt=""/></div>
            </div>
            <div className="permutations">
                <div className="paymentSystem_img"><img src={visa} alt=""/></div>
                <div className="paymentDate">10.03.2021</div>
                <div className="purposeOfPayment">Пополнение</div>
                <div className="paymentSize">+ 560,00 <img src={money} alt=""/></div>
            </div>
            <div className="permutations">
                <div className="paymentSystem_img"><img src={visa} alt=""/></div>
                <div className="paymentDate">10.03.2021</div>
                <div className="purposeOfPayment">Пополнение</div>
                <div className="paymentSize">+ 560,00 <img src={money} alt=""/></div>
            </div>
            <div className="permutations">
                <div className="paymentSystem_img"><img src={visa} alt=""/></div>
                <div className="paymentDate">10.03.2021</div>
                <div className="purposeOfPayment">Пополнение</div>
                <div className="paymentSize">+ 560,00 <img src={money} alt=""/></div>
            </div>
            <div className="permutations">
                <div className="paymentSystem_img"><img src={visa} alt=""/></div>
                <div className="paymentDate">10.03.2021</div>
                <div className="purposeOfPayment">Пополнение</div>
                <div className="paymentSize">+ 560,00 <img src={money} alt=""/></div>
            </div>
            <div className="permutations">
                <div className="paymentSystem_img"><img src={visa} alt=""/></div>
                <div className="paymentDate">10.03.2021</div>
                <div className="purposeOfPayment">Пополнение</div>
                <div className="paymentSize">+ 560,00 <img src={money} alt=""/></div>
            </div>

        </div>
    );
};

export default BalanceInfo;