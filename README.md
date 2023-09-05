# CodingKey Generator

## Swift Class 에 CodingKey 소스를 생성해주는 간단한 웹 페이지 입니다.

변경 전 (예제)
---
``` Swift
struct Account: Codable {
    var token: String?
    var id: String?
    var password: String?
    var email: String?
    var nickname: String?
    var type: AccountType? {
        get {

        }
        
        set {

        }
    }
    var guilds: [Guild]?
    var deviceNickname: String?
    var deviceId: String?
    var isNewNotice: Bool?
    var isNewContact: Bool?
}
```

변경 후 (예제)
--- 
``` Swift
struct Account: Codable {
    var token: String?
    var id: String?
    var password: String?
    var email: String?
    var nickname: String?
    var type: AccountType? {
        get {

        }
        
        set {

        }
    }
    var guilds: [Guild]?
    var deviceNickname: String?
    var deviceId: String?
    var isNewNotice: Bool?
    var isNewContact: Bool?

    enum CodingKeys: String, CodingKey {
        case token
        case id
        case password
        case email
        case nickname
        case type
        case guilds
        case deviceNickname
        case deviceId
        case isNewNotice
        case isNewContact
    }
}
```