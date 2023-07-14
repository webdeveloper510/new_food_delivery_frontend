const uploadFile = (event) => {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        console.log("fff", file)
        setFile(file)
    }
}


<input type="file" id="file" className="form-control" name="
                                                        file"  onChange={uploadFile} />