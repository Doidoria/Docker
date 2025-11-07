# 빌드 스테이지
FROM gradle:8.14.1-jdk21 AS build
WORKDIR /app
COPY . .
RUN gradle build --no-daemon -x test

# 실행 스테이지
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# 빌드한 JAR 복사
COPY --from=build /app/build/libs/*.jar app.jar

# 외부 접근을 위한 포트 설정
EXPOSE 8090

# JAR 실행
CMD ["java", "-jar", "app.jar"]