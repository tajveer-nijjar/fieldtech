export default function DummyData(): any {
  const data = {
    folders: [
      {
        folderName: "NetworkConfigFiles123",
        folders: [{ folderName: "Abcd" }, { folderName: "Folder 2" }],
        files: [
          {
            fileName: "can1.network",
            fileSize: 14,
            lastModifiedDate: "2022-07-22T09:45:47.8597139+12:00",
            fullPath: "C:\\etc\\systemd\\network\\can1.network"
          },
          {
            fileName: "10-eth0.network",
            fileSize: 43,
            lastModifiedDate: "2022-07-22T09:45:47.8577117+12:00",
            fullPath: "C:\\etc\\systemd\\network\\10-eth0.network"
          },
          {
            fileName: "25-wlan0.network",
            fileSize: 57,
            lastModifiedDate: "2021-11-15T08:16:20+13:00",
            fullPath: "C:\\etc\\systemd\\network\\25-wlan0.network"
          },
          {
            fileName: "hostname",
            fileSize: 18,
            lastModifiedDate: "2021-11-15T08:16:20+13:00",
            fullPath: "C:\\etc\\hostname"
          }
        ]
      },
      {
        folderName: "NetworkConfigFiles1234",
        folders: null,
        files: [
          {
            fileName: "can1.network",
            fileSize: 14,
            lastModifiedDate: "2022-07-22T09:45:47.8597139+12:00",
            fullPath: "C:\\etc\\systemd\\network\\can1.network"
          }
        ]
      }
    ],
    files: [
      {
        fileName: "fleet.json",
        fileSize: 694,
        lastModifiedDate: "2022-07-22T09:45:47.8577117+12:00",
        fullPath: "C:\\etc\\connexionz\\fleet.json"
      },
      {
        fileName: "vehicle.json",
        fileSize: 1032,
        lastModifiedDate: "2022-09-12T08:14:03.7383027+12:00",
        fullPath: "C:\\etc\\connexionz\\vehicle.json"
      }
    ]
  };

  return data;
}
