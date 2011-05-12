Purpose
=======
To learn ExtJS4's full MVC stack

Site Design
===========

View
----
1. Header (spans full page, static height)
2. Footer (spans full page, static height)
3. Nav tree (left side, static width)
4. Content panel (content determined by user's tree selection)

`--------------------`  
`|      Header      |`  
`--------------------`  
`| Side |  Content  |`  
`| Bar  |           |`  
`--------------------`  
`|      Footer      |`  
`--------------------`

Controllers
-----------
1. Thin

Models
------
1. IP
  1. IPv4 or IPv6 address (validation)
  2. belongs to Interface
2. Interface
  1. 2 static (lo, eth0)
  2. has many IPs
  
Model Stores
------------
1. Dev mode:  backed by memory
2. Prod mode: backed by REST