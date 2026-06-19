// NairaConversion.jsx
import React, { useState } from 'react';
import styles from './NairaConversion.module.css';

const EXCHANGE_RATE = 1550.00;

function CurrencyBadge({ code, variant }) {
    const indicatorClass = variant === 'usd' ? styles.currencyIndicatorUsd : styles.currencyIndicatorNgn;
    const circleClass = variant === 'usd' ? styles.currencyCircleUsd : styles.currencyCircleNgn;

    return (
        <div className={`${styles.currencyIndicator} ${indicatorClass}`}>
            <span className={`${styles.currencyCircle} ${circleClass}`}>{code}</span>
            {code}
        </div>
    );
}

function AmountField({ id, label, value, onChange, readOnly, currencyCode, currencyVariant }) {
    return (
        <div className={styles.inputBox}>
            <label htmlFor={id} className={styles.inputLabel}>{label}</label>
            <div className={styles.inputRow}>
                <input
                    id={id}
                    type="text"
                    className={styles.amountInput}
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                />
                <CurrencyBadge code={currencyCode} variant={currencyVariant} />
            </div>
        </div>
    );
}

export default function NairaConversion() {
    const [fromAmount, setFromAmount] = useState("1,000.00");
    const [isUsdToNgn, setIsUsdToNgn] = useState(true);

    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (/^[0-9.,]*$/.test(value)) {
            setFromAmount(value);
        }
    };

    const handleToggleSwap = () => {
        const numericValue = parseFloat(fromAmount.replace(/,/g, '')) || 0;
        const targetValue = isUsdToNgn ? numericValue * EXCHANGE_RATE : numericValue / EXCHANGE_RATE;

        setFromAmount(targetValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));
        setIsUsdToNgn(!isUsdToNgn);
    };

    const handleExecuteSwap = (e) => {
        e.preventDefault();
        const numericValue = parseFloat(fromAmount.replace(/,/g, '')) || 0;
        const targetValue = isUsdToNgn ? numericValue * EXCHANGE_RATE : numericValue / EXCHANGE_RATE;
        const fromUnit = isUsdToNgn ? 'USD' : 'NGN';
        const toUnit = isUsdToNgn ? 'NGN' : 'USD';

        console.log(`Executing Naira Conversion: ${numericValue.toLocaleString()} ${fromUnit} for ${targetValue.toLocaleString()} ${toUnit}`);
    };

    const numericFrom = parseFloat(fromAmount.replace(/,/g, '')) || 0;
    const computedTo = isUsdToNgn ? numericFrom * EXCHANGE_RATE : numericFrom / EXCHANGE_RATE;
    const toAmountFormatted = computedTo.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const fromLabel = isUsdToNgn ? 'USD' : 'NGN';
    const toLabel = isUsdToNgn ? 'NGN' : 'USD';

    return (
        <section className={styles.container} aria-labelledby="swap-heading">
            <h2 id="swap-heading" className={styles.title}>Instant Naira Conversion</h2>

            <form className={styles.swapWrapper} onSubmit={handleExecuteSwap}>
                <AmountField
                    id="swap-from-input"
                    label="FROM"
                    value={fromAmount}
                    onChange={handleAmountChange}
                    currencyCode={fromLabel}
                    currencyVariant={isUsdToNgn ? 'usd' : 'ngn'}
                />

                <button
                    type="button"
                    className={styles.swapBtn}
                    onClick={handleToggleSwap}
                    aria-label="Toggle swap direction"
                >
                    <span className="material-symbols-outlined">swap_vert</span>
                </button>

                <AmountField
                    id="swap-to-input"
                    label="TO (ESTIMATED)"
                    value={toAmountFormatted}
                    readOnly
                    currencyCode={toLabel}
                    currencyVariant={!isUsdToNgn ? 'usd' : 'ngn'}
                />

                <button type="submit" className={styles.actionButton}>
                    Execute Conversion
                </button>
            </form>
        </section>
    );
}