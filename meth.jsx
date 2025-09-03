// Бессмысленная мемоизация — здесь накладные расходы useMemo выше, чем простой вызов
const sum = useMemo(() => a + b, [a, b])


// Осмысленная мемоизация — здесь функция heavyMathOperation может занимать много времени
const complexResult = useMemo(() => {
    return heavyMathOperation(largeDataSet)
}, [largeDataSet])