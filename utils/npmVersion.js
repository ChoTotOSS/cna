module.exports = function () {
  let hasMinNpm = false
  let npmVersion = null
  try {
    npmVersion = execSync('npm --version').toString().trim()
    hasMinNpm = semver.lt(npmVersion, '3.0.0')
  } catch (err) {
    // ignore
  }
  return {
    hasMinNpm: hasMinNpm,
    npmVersion: npmVersion,
  }
}
