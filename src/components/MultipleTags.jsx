import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function MultipleTags() {
    const citys = ["臺北市","新北市","桃園市","臺中市","臺南市","高雄市,宜蘭縣","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","花蓮縣","臺東縣","澎湖縣,基隆市","新竹市","嘉義市"]

    return (
      <Stack spacing={3} className="w-full">
        <Autocomplete
          multiple
          id="tags-standard"
          options={citys}
          getOptionLabel={(option) => option}
          defaultValue={[citys[2]]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="複選縣市"
              placeholder="點擊選擇下拉選單或直接輸入縣市名稱"
            />
          )}
        />
      </Stack>
    );
  }