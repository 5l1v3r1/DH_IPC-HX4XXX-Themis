local Protocol = {};

-- 表示数值可以用16或10进制(最小值，最大值)
Protocol.Attr = 
{
	-- 协议的显示名称,不能超过16字符，目前暂不支持中文
	Name = "PELCO-9750",	
		
	-- 指明是云台协议还是矩阵协议，使用"PTZ", "MATRIX"表示
	Type = "MATRIX",
	
	-- 以ms为单位
	Internal = 250,
				
	-- 没有对应的地址范围，请都设成0xff
	-- 云台地址范围
	CamAddrRange 		= {0x01, 0xFF}, 
	-- 监视地址范围
	MonAddrRange		= {0x00, 0xFF},	
	-- 预置点范围
	PresetRange 		= {0x01, 0x20},
	-- 自动巡航线路范围
	TourRange			= {0x01, 0xff},
	-- 轨迹线路范围
	PatternRange		= {0x01, 0xff},
	-- 垂直速度范围
	TileSpeedRange 		= {0x01, 0x3F},
	-- 水平速度范围
	PanSpeedRange 		= {0x01, 0x3F},
	-- 自动扫描范围
	ScanRange 			= {0x01, 0xff},
	
	-- 辅助范围
	AuxRange 			= {0x01, 0x08},
}

Protocol.CommandAttr =
{
	-- 协议中需要更改的位置，用LUA下标表示，即下标从１开始,用10进制表示
	AddrPos 			= 2, 
	PresetPos 		= 6, 
	TileSpeedPos 	= 9,
	PanSpeedPos 	= 8,
	AuxPos 				= 6,
}

Protocol.Command = 
{
	-- 写具体协议时只能用16进制或字符表示,没有的话就注释掉
	Start= 
	{
		--写上下左右, 左上，左下，右上，右下
		TileUp 		= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x00, 0xAF, 0x00,",
		TileDown 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x10, 0x00, 0x00, 0xAF, 0x00,",
		PanLeft 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0xAF, 0x00,",
		PanRight 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x02, 0x00, 0x00, 0xAF, 0x00,",
		LeftUp 		= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x0C, 0x00, 0x00, 0xAF, 0x00,",
		LeftDown 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x14, 0x00, 0x00, 0xAF, 0x00,",
		RightUp		= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x0A, 0x00, 0x00, 0xAF, 0x00,",
		RightDown 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x00, 0xAF, 0x00,",

		ZoomWide 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x40, 0x00, 0x00, 0xAF, 0x00,",
		ZoomTele 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x20, 0x00, 0x00, 0xAF, 0x00,",
		FocusNear	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x01, 0x00, 0x00, 0x00, 0xAF, 0x00,",
		FocusFar 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xAF, 0x00,",
		IrisSmall 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x04, 0x00, 0x00, 0x00, 0xAF, 0x00,",
		IrisLarge 	= "0xA0, 0xC0, 0x00, 0x00, 0x01, 0x02, 0x00, 0x00, 0x00, 0xAF, 0x00,",

		MatrixSwitch    = "0xA0, 0xB2, 0x00, 0x00, 0x01, 0xAF, 0x00,",	
	},
	Stop = 
	{
		TileUp 		= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x00, 0xAF, 0x00,",
		TileDown 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x10, 0x00, 0x00, 0xAF, 0x00,",
		PanLeft 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0xAF, 0x00,",
		PanRight 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x02, 0x00, 0x00, 0xAF, 0x00,",
		LeftUp 		= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x0C, 0x00, 0x00, 0xAF, 0x00,",
		LeftDown 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x14, 0x00, 0x00, 0xAF, 0x00,",
		RightUp		= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x0A, 0x00, 0x00, 0xAF, 0x00,",
		RightDown 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x00, 0xAF, 0x00,",

		ZoomWide 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x40, 0x00, 0x00, 0xAF, 0x00,",
		ZoomTele 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x20, 0x00, 0x00, 0xAF, 0x00,",
		FocusNear	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x01, 0x00, 0x00, 0x00, 0xAF, 0x00,",
		FocusFar 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xAF, 0x00,",
		IrisSmall 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x04, 0x00, 0x00, 0x00, 0xAF, 0x00,",
		IrisLarge 	= "0xA0, 0xC5, 0x00, 0x00, 0x01, 0x02, 0x00, 0x00, 0x00, 0xAF, 0x00,",

	},
}

Protocol.Checksum = function (s)
	if table.getn(s) == 7 then
		 s[7] = math.mod((s[2] + s[3] + s[4] + s[5]), 256);	
	else
		s[11] = math.mod((s[2] + s[3] + s[4] + s[5] + s[6] + s[7] + s[8] + s[9]), 256);
	end;
	return s;
end;

Protocol.CamAddrProcess = function(s, addr)
        s[4] = math.floor(addr/256);
	s[5] = math.mod(addr,256);
	return s;
end;

Protocol.MonAddrProcess = function(s, addr)
	 s[3] = math.mod(addr, 256);
	return s;
end;

Protocol.SpeedProcess = function(s, ver, hor)
	if s[2] ~= 0xc5 then
		s[9] = ver;
		s[8] = hor;
	end;
	return s;
end;
--[[
Protocol.PresetProcess = function(s, arg)
	return s;
end;
--]]


return Protocol;