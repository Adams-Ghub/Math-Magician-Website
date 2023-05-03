import '../css/calculator.css';
import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [Value, setValue] = useState({ total: null, next: null, operation: null });

  const buttonValue = (btnName) => {
    const returned = calculate(Value, btnName);
    setValue(returned);
  };

  return (
    <div>
      <div className="main-container">
        <div className="screen">{Value.next || Value.total || '0'}</div>

        <Button className="all-btn" id="AC-btn" value="AC" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="plus-or-minus-btn" value="+/-" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="percent-btn" value="%" buttonName={(value) => buttonValue(value)} />

        <Button className="orange-btn all-btn" id="division-btn" value="÷" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="seven-btn" value="7" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="eight-btn" value="8" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="nine-btn" value="9" buttonName={(value) => buttonValue(value)} />

        <Button className="orange-btn all-btn" id="multiply-btn" value="x" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="four-btn" value="4" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="five-btn" value="5" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="six-btn" value="6" buttonName={(value) => buttonValue(value)} />

        <Button className="orange-btn all-btn" id="minus-btn" value="-" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="one-btn" value="1" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="two-btn" value="2" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="three-btn" value="3" buttonName={(value) => buttonValue(value)} />

        <Button className="orange-btn all-btn" id="add-btn" value="+" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="zero-btn" value="0" buttonName={(value) => buttonValue(value)} />

        <Button className="all-btn" id="dot-btn" value="." buttonName={(value) => buttonValue(value)} />

        <Button className="orange-btn all-btn" id="equal-btn" value="=" buttonName={(value) => buttonValue(value)} />
      </div>
    </div>
  );
}

export default Calculator;
