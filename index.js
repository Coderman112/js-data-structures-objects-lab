let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    const newObj = {...object}
    newObj[key] = value
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key, value) {
    const newObj = {...driver}
    newObj[key] = value
    delete newObj.key
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
    driver[key] = value
    delete driver.key
    return driver
}