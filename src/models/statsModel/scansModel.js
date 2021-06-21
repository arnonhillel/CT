module.exports = mongoose => {
  const apiEventItem = mongoose.Schema({
    data: String,
    patientId: String,
    hospitalsId: String,
    timeStamp: Number,

  })

  const Scans = mongoose.model(
    'scans',
    apiEventItem
  );

  return Scans;
};