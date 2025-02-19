import { useState } from 'react'
import './App.css'
import customTheme from './theme/customTheme';
import { Drawer, Button, IconButton, Pagination } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpen from './components/MenuOpen'
import MultipleTags from './components/MultipleTags'
import TableComponent from './components/TableComponent';
import DateComponent from './components/DateComponent';
import { zhTW as dataGridZhTW } from '@mui/x-data-grid/locales';
import { zhTW as datePickersZhTW } from '@mui/x-date-pickers/locales';

const languageTheme = createTheme(
  dataGridZhTW, datePickersZhTW
);

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [page, setPage] = useState(1);

  return (
    <>
      <ThemeProvider theme={languageTheme}>
        <div className="relative">
          <nav className="sticky z-99 top-0 right-0 w-full md:hidden flex justify-between items-center py-7 bg-white">
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon className="text-dark"></MenuIcon>
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <MenuOpen />
            </Drawer>
            <h2 className='text-lg font-bold'>e 指成交</h2>
            <ThemeProvider theme={customTheme}>
              <Button variant="contained" color="primary">Text</Button>
            </ThemeProvider>
          </nav>
          <div className="px-5">
            <p className='mb-12 font-bold text-info'>新上架 <span className='text-tertiary'>135</span> 筆資料</p>
            <div className="mb-12">
              <Pagination count={10} defaultPage={5} siblingCount={1} color="primary" onChange={(e, page) => setPage(page)} /> <span>目前在第 {page} 頁</span>
            </div>
            <div className="mb-12">
              <p>有 RWD 的 AutoComplete MultipleTags：Tags 自動 flex flow</p>
              <MultipleTags></MultipleTags>
            </div>
            <div className="mb-12">
              <p>Table 測試</p>
              <TableComponent />
            </div>
            <div className="mb-12">
              <p>日期選擇，可接受鍵盤輸入</p>
              <DateComponent />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
