const tableColums = (classes) => {
  const columns = [
    {
      title: "Sno.",
      dataIndex: "key",
      key: "Sno",
      align: "center",
      render: (sNo) => <p className={classes.SNoText}>{sNo}</p>,
    },

    {
      title: "Repository Name",
      dataIndex: "repoName",
      key: "repoName",
      render: (text, record) => (
        <a
          href={record.repoUrl}
          className={classes.RepositoryName}
          rel="noreferrer"
          target="_blank"
        >
          {text}
        </a>
      ),
    },

    {
      title: "Stars",
      dataIndex: "stars",
      key: "stars",
      align: "center",
      sorter: (a, b) => a.stars - b.stars,
      render: (starCount) => (
        <p className={classes.RepositoryName}>{starCount}</p>
      ),
    },
  ];

  return columns;
};

export default tableColums;
