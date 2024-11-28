// Steps1: String sara save kor-e na
// Steps2: Age sei job tha-k-teo pare nao pare (mane 2 bar apply kor-te par-be na eki job-e)
// Steps3: Age kno job-e apply kor-se ki-na seta ni-bo karo-n age kon-o job e se apply kor-te pare ok
// Steps4: to - se local storage e save kor-te pare tai local storage e the-ke nib-o

// Steps5: LC te sorb-oda key value pare his-hebe save hoi 1. nam 2. value

// Steps6: LC te jodi saved/stored jobs tha-ke tah-ole return kor-bo JSON.parse kor-bo

const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-application");
  return storedJobApplication ? JSON.parse(storedJobApplication) : [];
};

const saveJobApplication = (id) => {
  const allStoredJobApplication = getStoredJobApplication();
  const exist = allStoredJobApplication.includes(id);
  if (!exist) {
    allStoredJobApplication.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(allStoredJobApplication)
    );
    return true;
  }
  return false;
};

export { saveJobApplication, getStoredJobApplication };
