const scoreApproved = (score) => {
  if (score > 0 && score <= 299) return data = { approved: false }
  if (score >= 300 && score <= 599) return data = { approved: true, prohibited: 70 }
  if (score >= 600 && score <= 799) return data = { approved: true, prohibited: 50 }
  if (score >= 800 && score <= 950) return data = { approved: true, prohibited: 30 }
  if (score >= 951 && score <= 1000) return data = { approved: true, prohibited: 0 }
}

module.exports = scoreApproved