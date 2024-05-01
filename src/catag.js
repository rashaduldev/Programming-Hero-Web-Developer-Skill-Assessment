export const catagoryData = async () => {
    const res = await fetch(
       'fakedata/projectPageData.json'
    );
  
    return res.json();
  };